import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 font-heading text-4xl font-bold">404</h1>
        <p className="mb-4 font-body text-xl text-muted-foreground">
          Oops! Página não encontrada
        </p>
        <Link
          href="/"
          className="font-body text-primary underline hover:text-primary/90"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
