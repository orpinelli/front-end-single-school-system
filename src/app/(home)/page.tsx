import Image from "next/image";

export default function Escolas() {
  return (
    <body className="bg-gradient-to-br from-gray-900 to-black">
      <div className="text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
        <div className="flex justify-between">
          <h1 className="font-serif text-3xl font-medium">
            Sistema Unico de Escola
          </h1>
          <a
            href="/login"
            className="self-start px-3 py-2 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black"
          >
            Clique aqui para fazer login
          </a>
        </div>

        <div className="h-32 md:h-40"></div>

        <p className="font-sans text-4xl font-bold text-gray-200 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
          Seja bem-vindo ao sistema unificador de escolas
        </p>
        <div className="h-10"></div>
        <p className="max-w-2xl font-serif text-xl text-gray-400 md:text-2xl">
          Aqui voce ira gerencias todas as escolas da nossa cidade
        </p>

        <div className="h-24 md:h-40"></div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
              Muito facil de se usar!
            </p>
            <h2 className="text-4xl font-bold"></h2>
            <div className="h-6"></div>
            <p className="font-serif text-xl text-gray-400 md:pr-10">
              Com ele, você terá uma visão completa de todas as escolas da
              cidade e de suas respectivas turmas.
            </p>
            <div className="h-8"></div>
          </div>
          <div>
            <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96"></div>
          </div>
        </div>
      </div>
    </body>
  );
}
