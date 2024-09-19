export default function Login() {
  return (
    <div className="container px-4 mx-auto mt-16">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Login</h2>
        </div>
        <form action="">
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="">
              Email
            </label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-200 bg-white shadow border-2 border-indigo-900 rounded"
              type="email"
              placeholder="email"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="">
              Password
            </label>
            <input
              className="text-black inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-200 bg-white shadow border-2 border-indigo-900 rounded"
              type="password"
              placeholder="Digite sua senha aqui"
            />
          </div>
          <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
            <div className="w-full lg:w-auto px-4">
              <a
                className="inline-block font-extrabold hover:underline"
                href="#"
              >
                Esqueceu sua Senha?
              </a>
            </div>
          </div>
          <a
            href="/escolas"
            className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
          >
            Fazer Login
          </a>
        </form>
      </div>
    </div>
  );
}
