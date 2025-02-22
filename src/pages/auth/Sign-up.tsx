import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { toast } from 'sonner'
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.number(),
  email: z.string().email(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success('Estabelecimento cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      });
    } catch {
      toast.error('Erro ao cadastrar estabelecimento');
    }
  }
  return (
    <>
      <Helmet title='Cadastro' />
      <div className="p-8">
        <Button asChild variant={"ghost"} className="absolute right-8 top-8">
          <Link to='/sign-in'>Fazer login</Link>
        </Button>
        <div className="flex flex-col justify-center gap-4 w-[350px]">
          <div className="flex flex-col gap-2 text-start">
            <h1 className="text-2xl font-semibold tracking-tight">Criar conta grátis</h1>
            <p className="text-sm text-muted-foreground">Seja um parceiro e começe suas vendas!</p>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input id="restaurantName" type="text" {...register('restaurantName')}></Input>
            </div>
            <div className="space-y-2">
              <Label htmlFor="manegerName">Seu nome</Label>
              <Input id="manegerName" type="text" {...register('managerName')}></Input>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-email</Label>
              <Input id="email" type="email" {...register('email')}></Input>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu telefone</Label>
              <Input id="phone" type="tel" {...register('phone')}></Input>
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">Finalizar cadastro</Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos <a href="" className="underline underline-offset-4">termos de serviço</a> e <a href="" className="underline underline-offset-4">politicas de privacidade</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}