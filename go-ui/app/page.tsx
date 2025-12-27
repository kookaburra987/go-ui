'use client'
import Image from "next/image";

export default function Home() {

    function login(){
        console.info("user login ")
    }

    function register(){
        console.info('new registration')
    }

  return (
      <main>
          <section className="text-center">
              <h1 className="text-8xl text-lime-400">Go for it</h1>
              <h2 className="text-3xl">The place to play your favorite board game.</h2>
          </section>
          <section className="flex justify-center p-8">
              <Image
                  src="/welcome-image.png"
                  alt="a go board"
                  width={400}
                  height={400}
                  className="border-2 border-dotted border-lime-200"
              />

              <section>
                  <form action={login}>
                      <button className="bg-lime-200 text-zinc-900 m-5 p-3 rounded-xl">
                          Login
                      </button>
                  </form>
                  <form action={register}>
                      <button className="bg-lime-200 text-zinc-900 m-5 p-3 rounded-xl">
                          Register
                      </button>
                  </form>
              </section>
          </section>

      </main>
  );
}
