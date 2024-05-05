"use client";
import React, { useState } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { GetCards, createCard, deleteCard, updateCard } from "../taskActions";
import { task as Task } from "@prisma/client";
import { useEffect } from "react";
type Card = Task;
import { useTasks } from "@/app/state/useTasks";
interface ColumnProps {
  title: string;
  headingColor: string;
  cards: Card[];
  column: string;
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

interface CardProps {
  title: string;
  id: string;
  column: string;
  handleDragStart: (e: any, card: any) => void;
}

interface DropIndicatorProps {
  beforeId: string | null;
  column: string;
}

export default function KanbanBoard() {
  return (
    <div className=" w-full bg-white text-neutral-50">
      <Board />
    </div>
  );
}

const Board = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const { addThis } = useTasks();
  const addCard = async(text: string) => {

      if (!text.trim().length) return;
      const newCard = await createCard(text.trim(), "todo");
      console.log(newCard);
      if (!newCard) throw new Error("card not created");
      setCards((prevCards: any) => [...prevCards, newCard]);

  };
  useEffect(() => {
    if (addThis !== "") {
      addCard(addThis);
    }
  }, [addThis]);
  useEffect(() => {
    const fetchCards = async () => {
      const res = await GetCards();
      if (!res) {
        console.log("Error");
        return;
      }
      console.log(res);
      setCards(res);
    };
    fetchCards();
  }, []);

  return (
    <div className="flex flex-wrap h-full w-full gap-3  p-12">
      <Column
        title="TODO"
        column="todo"
        headingColor="text-black"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-black"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-black"
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

const Column: React.FC<ColumnProps> = ({
  title,
  headingColor,
  cards,
  column,
  setCards,
}) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e: any, card: any) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = async (e: any) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);

    let copy = [...cards];
    let cardToTransfer = copy.find((c) => c.id === cardId);
    if (!cardToTransfer) return;

    cardToTransfer = { ...cardToTransfer, column };
    copy = copy.filter((c) => c.id !== cardId);

    const insertAtIndex = copy.findIndex(
      (c) => c.id === e.dataTransfer.getData("beforeId")
    );

    if (insertAtIndex === -1) {
      copy.push(cardToTransfer);
    } else {
      copy.splice(insertAtIndex, 0, cardToTransfer);
    }
    const res = await updateCard(cardId, column);
    console.log(res);
    setCards(copy);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-slate-50" : "bg-neutral-800/0"
        }`}>
        {filteredCards.map((card) => (
          <Card key={card.id} {...card} handleDragStart={handleDragStart} />
        ))}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, id, column, handleDragStart }) => {
  return (
    <motion.div
      layout
      layoutId={id}
      draggable="true"
      onDragStart={(e) => handleDragStart(e, { title, id, column })}
      className="cursor-grab  border rounded-md  bg-red-600  p-3 active:cursor-grabbing">
      <p className="text-sm text-white">{title}</p>
      <Ellipsis></Ellipsis>
    </motion.div>
  );
};

const DropIndicator: React.FC<DropIndicatorProps> = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};

const BurnBarrel: React.FC<{
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}> = ({ setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = async (e: React.DragEvent) => {
    const cardId = e.dataTransfer.getData("cardId");

    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
    const res = await deleteCard(cardId);
    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}>
      <FiTrash />
    </div>
  );
};

const AddCard: React.FC<{
  column: string;
  setCards: any;
}> = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim().length) return;
    const newCard = await createCard(text.trim(), column);
    console.log(newCard);
    if (!newCard) throw new Error("card not created");
    setCards((prevCards: any) => [...prevCards, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            className="w-full rounded  bg-red-100 p-3 text-sm text-black placeholder-slate-400 focus:outline-none"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50">
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300">
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-slate-500">
          <span>Add task</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};

function Ellipsis() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-ellipsis">
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}
/*
title string id num column, 
*/
