import Image from 'next/image';
import {Home as HomeIcon, Laptop, PlayCircle, FileText, LayoutGrid, Edit3, BookMarked, BookOpenCheck, LayoutList, PieChart, GitPullRequestClosed, MessageSquare, User, Newspaper, HelpCircle, LogOut} from 'lucide-react'

export default function Home() {
  return (
    <main>
      <div className='flex h-screen'>
        <aside className='flex flex-col w-80 bg-zinc-900 p-7'>
          <Image
            src='/images/LogoFerrettoDark.png'
            width={50} height={50}
            className='rounded-br-lg cursor-pointer '
            alt='Logo-Ferretto'
          />
          <div className='p-2 mt-4'>

            <div className='inline-flex items-center'>
              <h2 className='text-xl font-bold tracking-wider text-zinc-300'>
                MODO ESCURO
              </h2>

              <label className='relative cursor-pointer ml-2'>
                <input
                  type='checkbox'
                  value=''
                  className='sr-only peer'
                ></input>
                <div className="w-10 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[4px] after:bg-blue-600 after:border-blue-600 after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
              </label>
            </div>

            <nav className='mt-11'>
              <ul className='space-y-6 font-extrabold tracking-wider text-zinc-300 text-xs'>

                <li>
                  <a href="https://app.professorferretto.com.br/" className='flex items-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0049ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    <span>INÍCIO</span>
                  </a>
                </li>                
                <li>
                  <a href="https://app.professorferretto.com.br/aulas" className='flex items-center gap-2 '>
                    <Laptop />
                    <span>AULAS</span>
                  </a>
                </li>
                <li>
                  <a href="https://app.professorferretto.com.br/lives" className='flex items-center gap-2'>
                    <PlayCircle />
                    <span>FERRETO+</span>
                  </a>
                </li>
                <li>
                  <a href="https://app.professorferretto.com.br/redacoes" className='flex items-center gap-2'>
                    <FileText />
                    <span>REDAÇÃO</span>
                  </a>
                </li>
                <li>
                  <a href="https://app.professorferretto.com.br/provas-comentadas" className='flex items-center gap-2'>
                    <LayoutGrid />
                    <span>PROVAS COMENTADAS</span>
                  </a>
                </li>
                <li>
                  <a href="https://app.professorferretto.com.br/curso-de-discursivas" className='flex items-center gap-2'>
                    <Edit3 />
                    <span>CURSO DE DISCURSIVAS</span>
                  </a>
                </li>
                <li>
                  <a href="https://app.professorferretto.com.br/planos-de-estudo" className='flex items-center gap-2'>
                    <BookMarked />
                    <span>PLANO DE ESTUDOS</span>
                  </a>
                </li>
                <li>
                  <a href="https://app.professorferretto.com.br/curso-por-questoes" className='flex items-center gap-2'>
                    <BookOpenCheck />
                    <span>CURSO POR QUESTÕES</span>
                  </a>
                </li>
                <li>
                  <a href="https://app.professorferretto.com.br/questoes" className='flex items-center gap-2'>
                    <LayoutList />
                    <span>QUESTÕES</span>
                  </a>
                </li>
                <li>
                  <a href="https://app.professorferretto.com.br/estatisticas" className='flex items-center gap-2'>
                    <PieChart />
                    <span>ESTATÍSTICAS</span>
                  </a>
                </li>
                <li>
                  <a href="https://app.professorferretto.com.br/simulados" className='flex items-center gap-2'>
                    <GitPullRequestClosed />
                    <span>SIMULADO</span>
                  </a>
                </li>
                <li>
                  <a href="https://app.professorferretto.com.br/area-da-comunidade" className='flex items-center gap-2'>
                    <MessageSquare />
                    <span>COMUNIDADES</span>
                  </a>
                </li>
                <li>
                  <a href="https://app.professorferretto.com.br/area-do-aluno" className='flex items-center gap-2'>
                    <User />
                    <span>ÁREA DO ALUNO</span>
                  </a>
                </li>
                <li>
                  <a href="https://app.professorferretto.com.br/caderno-de-questoes" className='flex items-center gap-2'>
                    <Newspaper />
                    <span>CADERNO DE QUESTÕES</span>
                  </a>
                </li>
                <li>
                  <a href="https://app.professorferretto.com.br/central-de-ajuda" className='flex items-center gap-2'>
                    <HelpCircle />
                    <span>CENTRAL DE AJUDA</span>
                  </a>
                </li>
                <li>
                  <a href="" className='flex items-center gap-2'>
                    <LogOut />
                    <span>LOGOUT</span>
                  </a>
                </li>
                
                
                
              </ul>
            </nav>


          </div>
          
        </aside>

        <main className='flex-1 bg-zinc-800 pt-10 pb-10 pl-10 pr-24'>
          <h1 className='text-3xl font-bold text-zinc-200'>
            Olá Tony! Esse é o seu dashboard
          </h1>
          <nav className='w-full mt-10 p-6 border-t border-zinc-200'></nav>
          <div className='grid gap-7 grid-cols-firstGridMainColumns font-bold text-zinc-300'>


          <div className='w-52 pt-7 pb-4 px-7 bg-zinc-600/50 rounded-2xl flex flex-col'>
              <h3 className='h-full mb-4 text-xs flex'>QUESTÕES RESPONDIDAS</h3>
              
              <div className='flex flex-col h-full'>
                <p className='font-normal flex justify-end text-sm pb-1'>8555/17110</p>
                <div className='h-1 rounded-full w-100% bg-zinc-800'>
                  <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>    </div>
                </div>
              </div>
            </div>

            <div className='w-52 pt-7 pb-4 px-7 bg-zinc-600/50 rounded-2xl flex flex-col'>
              <h3 className='h-full mb-4 text-xs flex'>SEMANAS DO SEU PLANO DE ESTUDO</h3>
              
              <div className='flex flex-col h-full'>
                <p className='font-normal flex justify-end text-sm pb-1'>15/30</p>
                <div className='h-1 rounded-full w-100% bg-zinc-800'>
                  <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>    </div>
                </div>
              </div>
            </div>

            <div className='w-52 pt-7 pb-4 px-7 bg-zinc-600/50 rounded-2xl flex flex-col'>
              <h3 className='h-full mb-4 text-xs flex'>SEMANAS DO SEU CURSO POR QUESTÕES</h3>
              
              <div className='flex flex-col h-full'>
                <p className='font-normal flex justify-end text-sm pb-1'>15/30</p>
                <div className='h-1 rounded-full w-100% bg-zinc-800'>
                  <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>    </div>
                </div>
              </div>
            </div>

            <div className='w-52 pt-7 pb-4 px-7 bg-zinc-600/50 rounded-2xl flex flex-col'>
              <h3 className='h-full mb-4 text-xs flex'>AULAS ASSISTIDAS</h3>
              
              <div className='flex flex-col h-full'>
                <p className='font-normal flex justify-end text-sm pb-1'>2164/4328</p>
                <div className='h-1 rounded-full w-100% bg-zinc-800'>
                  <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>    </div>
                </div>
              </div>
            </div>

            <div className='w-52 pt-7 pb-4 px-7 bg-zinc-600/50 rounded-2xl flex flex-col'>
              <h3 className='h-full mb-4 text-xs flex'>SIMULADOS REALIZADOS</h3>
              
              <div className='flex flex-col h-full'>
                <p className='font-bold flex justify-center text-3xl pb-1'>5</p>                
              </div>
            </div>
            
            
          </div>
        </main>

        <aside className='w-80 bg-zinc-800'>aside-2</aside>
      </div>
    </main>
  );
}
