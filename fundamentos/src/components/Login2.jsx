import img from "../../public/assets/use.png";
import Image from "next/image";
export default function Login2() {
  return (
    <div className="min-h-screen bg-white flex">
      <div className="hidden lg:block relative w-0 flex-1 bg-gray-900">
        <div className="flex h-full justify-center items-center">
          <Image src={img} />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <div className="">
            <Image src={img} className="lg:hidden h-20 w-auto" />
            <h2 className="mt-6 text-3xl font-semibold text-pink-700">
              Entrar
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w">
              Novo por aqui?{" "}
              <a href="" className="font-medium text-pink-700">
                assine aqui
              </a>
            </p>
          </div>
          <div className="mt-6">
            <form action="" className="">
              <div className="mb-4">
                <input type="email" placeholder="E-mail" className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus: outline-none" />
              </div>
              <div className="mb-4">
                <input type="password" placeholder="Password" className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus: outline-none" />
              </div>
              <div className="mb-4">
                <button className="inline-block w-full py-4 px-8 leading-none text-white bg-pink-900 font-semibold rounded shadow">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
