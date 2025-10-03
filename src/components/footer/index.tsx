export function Footer() {
  return (
    <footer className="text-gold-100 font-montserrat border-t-1 border-amber-100/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <a href="#inicio">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded flex items-center justify-center">
                  <img
                    src="/logo.webp"
                    alt="Pereira & Zanatta Logo"
                    className="w-10 h-10 object-contain mt-2"
                    loading="eager"
                  />
                </div>

                <span className="text-2xl font-semibold hidden sm:block">
                  Pereira & Zanatta Advogados
                </span>
              </div>
            </a>
          </div>

          <p className="text-muted-foreground text-md text-center md:text-right">
            &copy; {new Date().getFullYear()} Pereira & Zanatta Advogados. Todos
            os direitos reservados.
            <br />
            Defendendo seus direitos com ética e excelência.
          </p>
        </div>
      </div>
    </footer>
  );
}
