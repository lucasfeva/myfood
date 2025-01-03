import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { toast } from 'sonner'
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signInForm = z.object({
  email: z.string().email()
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignInForm>()
  
  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Enviamos um link de autenticação para seu e-mail', {
        description: 'Acesse sua conta pelo link enviado', 
      })
    } catch {
      toast.error('Não foi possivel enviar para este e-mail')
    }
  }
  
  return (
    <>
      <Helmet title='Login' />
      <div className="p-8">
        <Button asChild variant={"ghost"} className="absolute right-8 top-8">
          <Link to='/sign-up'>Novo estabelecimento</Link>
        </Button>
        <div className="flex flex-col justify-center gap-4 w-[350px]">
          <div className="flex flex-col gap-2 text-start">
            <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
            <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro!</p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-email</Label>
              <Input id="email" type="email" {...register('email')}></Input>
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">Acessar painel</Button>
          </form>
        </div>
      </div>
    </>
  )
}