"use client";

import {
  Transaction,
  TransactionCategory,
  TransactionPaymentMethod,
} from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/type-badge";
import { Button } from "@/app/_components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";

const TRANSACTION_CATEGORY_LABELS = {
  [TransactionCategory.HOUSING]: "Moradia",
  [TransactionCategory.TRANSPORTATION]: "Transporte",
  [TransactionCategory.FOOD]: "Comida",
  [TransactionCategory.ENTERTAINMENT]: "Entretenimento",
  [TransactionCategory.HEALTH]: "Saúde",
  [TransactionCategory.UTILITY]: "Utilidades",
  [TransactionCategory.SALARY]: "Salario",
  [TransactionCategory.EDUCATION]: "Educação",
  [TransactionCategory.OTHER]: "Outros",
};

const TRANSACTION_PAYMENT_METHOD_LABELS = {
  [TransactionPaymentMethod.CREDIT_CARD]: "Cartão de Crédito",
  [TransactionPaymentMethod.DEBIT_CARD]: "Cartão de Débito",
  [TransactionPaymentMethod.BANK_TRANSFER]: "Transferência Bancária",
  [TransactionPaymentMethod.BANK_SLIP]: "Boleto Bancário",
  [TransactionPaymentMethod.CASH]: "Dinheiro",
  [TransactionPaymentMethod.PIX]: "PIX",
  [TransactionPaymentMethod.OTHER]: "Outros",
};

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABELS[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row: { original: transaction } }) => (
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          className="rounded-full text-muted-foreground"
          onClick={() => console.log(transaction.id)}
        >
          <PencilIcon />
        </Button>
        <Button
          variant="ghost"
          className="rounded-full text-muted-foreground"
          onClick={() => console.log("Excluir")}
        >
          <TrashIcon />
        </Button>
      </div>
    ),
  },
];
