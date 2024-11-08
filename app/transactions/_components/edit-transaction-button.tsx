"use client";

import { useState } from "react";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { Button } from "@/app/_components/ui/button";
import { PencilIcon } from "lucide-react";
import { Transaction } from "@prisma/client";

interface EditTransactionButtonProps {
  transaction: Transaction;
}

const EditTransactionButton = ({ transaction }: EditTransactionButtonProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        className="rounded-full text-muted-foreground"
        onClick={() => setDialogOpen(true)}
      >
        <PencilIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogOpen}
        setIsOpen={setDialogOpen}
        transactionId={transaction.id}
        defaultValues={{
          ...transaction,
          amount: Number(transaction.amount),
        }}
      />
    </>
  );
};

export default EditTransactionButton;
