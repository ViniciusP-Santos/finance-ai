import { CheckIcon, XIcon } from "lucide-react";
import Navbar from "../_components/navbar";
import { Card, CardContent, CardHeader } from "../_components/ui/card";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AquirePlanButton from "./_components/aquire-plan-button";

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />
      <div className="mt-20 flex h-full flex-col space-y-6 p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Assinatura</h1>
        </div>
        <div className="flex h-full gap-6">
          <div className="flex gap-6">
            <Card className="w-[450px]">
              <CardHeader className="border-b border-solid py-8">
                <h2 className="text-center text-2xl font-semibold">
                  Plano Basíco
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-4xl">R$</span>
                  <span className="text-6xl font-semibold">0</span>
                  <div className="text-2xl text-muted-foreground">/ mês</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 py-8">
                <div className="flex items-center gap-2">
                  <CheckIcon className="text-primary" />
                  <p>Apenas 10 transações por mês (7/10)</p>
                </div>
                <div className="flex items-center gap-2">
                  <XIcon />
                  <p>Relatorios de IA</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex gap-6">
            <Card className="w-[450px]">
              <CardHeader className="border-b border-solid py-8">
                <h2 className="text-center text-2xl font-semibold">
                  Plano Premium
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-4xl">R$</span>
                  <span className="text-6xl font-semibold">19</span>
                  <div className="text-2xl text-muted-foreground">/ mês</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 py-8">
                <div className="flex items-center gap-2">
                  <CheckIcon className="text-primary" />
                  <p>Transações ilimitadas</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="text-primary" />
                  <p>Relatorios de IA</p>
                </div>
                <AquirePlanButton />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
