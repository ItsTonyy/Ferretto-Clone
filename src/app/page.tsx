import Image from 'next/image';
import Image1 from '/public/images/Tragédia1.jpg';
import Image2 from '/public/images/Tragédia2.jpg';
import Image3 from '/public/images/CriseSanitária.jpg'; 
import ferrettoImage from '/public/images/ferretto.png'; 
import LogoAside from '/public/images/LogoTAside.png';
import {Home as HomeIcon, Laptop, PlayCircle, FileText, LayoutGrid, Edit3, BookMarked, BookOpenCheck, LayoutList, PieChart, GitPullRequestClosed, MessageSquare, User, Newspaper, HelpCircle, LogOut, ArrowRight, Check} from 'lucide-react'

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

        <main className='flex-1 bg-zinc-800 pt-10 pb-10 pl-10 mr-8'>
          <h1 className='text-2xl font-bold text-zinc-200'>Olá Tony! Esse é o seu dashboard</h1>
          <div className='w-full mt-10 p-6 border-t border-zinc-200'></div>

          <nav className='grid gap-7 grid-cols-firstGridMainColumns font-bold text-zinc-300'>


          <div className='w-50 pt-7 pb-6 px-7 bg-zinc-600/50 rounded-2xl flex flex-col'>
              <h3 className='h-full mb-4 text-xs flex'>QUESTÕES RESPONDIDAS</h3>
              
              <div className='flex flex-col h-full'>
                <p className='font-normal flex justify-end text-sm pb-1'>8555/17110</p>
                <div className='h-1 rounded-full w-100% bg-zinc-800'>
                  <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>    </div>
                </div>
              </div>
            </div>

            <div className='w-50 pt-7 pb-6 px-7 bg-zinc-600/50 rounded-2xl flex flex-col'>
              <h3 className='h-full mb-4 text-xs flex'>SEMANAS DO SEU PLANO DE ESTUDO</h3>
              
              <div className='flex flex-col h-full'>
                <p className='font-normal flex justify-end text-sm pb-1'>15/30</p>
                <div className='h-1 rounded-full w-100% bg-zinc-800'>
                  <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>    </div>
                </div>
              </div>
            </div>

            <div className='w-50 pt-7 pb-6 px-7 bg-zinc-600/50 rounded-2xl flex flex-col'>
              <h3 className='h-full mb-4 text-xs flex'>SEMANAS DO SEU CURSO POR QUESTÕES</h3>
              
              <div className='flex flex-col h-full'>
                <p className='font-normal flex justify-end text-sm pb-1'>15/30</p>
                <div className='h-1 rounded-full w-100% bg-zinc-800'>
                  <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>    </div>
                </div>
              </div>
            </div>

            <div className='w-50 pt-7 pb-6 px-7 bg-zinc-600/50 rounded-2xl flex flex-col'>
              <h3 className='h-full mb-4 text-xs flex'>AULAS ASSISTIDAS</h3>
              
              <div className='flex flex-col h-full'>
                <p className='font-normal flex justify-end text-sm pb-1'>2164/4328</p>
                <div className='h-1 rounded-full w-100% bg-zinc-800'>
                  <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>    </div>
                </div>
              </div>
            </div>

            <div className='w-50 pt-7 pb-6 px-7 bg-zinc-600/50 rounded-2xl flex flex-col'>
              <h3 className='h-full mb-4 text-xs flex'>SIMULADOS REALIZADOS</h3>
              
              <div className='flex flex-col h-full'>
                <p className='font-bold flex justify-center text-3xl pb-1'>5</p>                
              </div>
            </div>
            
            
          
          
          
          
          </nav>

          <section className='py-8 text-sm grid grid-cols-secondGridMainColumns gap-7'>

            <div className='h-98 bg-zinc-900 p-8 rounded-2xl'>
              <h3 className='font-semibold pb-10'>Aulas assistidas</h3>

              <ul className='overflow-y-auto max-h-72 '>
                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>Matemática</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>222/444</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>Física (Prof. Coelho)</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>249/499</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>Física (Prof. Boaro)</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>76/153</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>Química</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>206/412</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>História</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>52/103</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>História do Brasil</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>45/70</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>História da Arte</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>4/9</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>Geografia</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>112/223</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>Filosofia</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>60/120</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>Sociologia</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>17/35</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>Gramática</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>55/111</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>Interpretação de texto</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>42/84</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>Literatura</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>58/116</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>Atualidades</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>15/31</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>Redação</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>46/92</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>Inglês</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>10/20</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>Espanhol</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>6/12</span>
                </li>
                <div className='w-full my-6 border-t border-zinc-200'></div>

                <li className='flex flex-row items-center'>

                  <span className='min-w-12rem'>AVENGER - Produtividade, Foco e Disciplina</span>
                  <div className='h-1 rounded-full w-full bg-slate-200'>
                    <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'>  </div>                  
                  </div>
                  <span className='min-w-6rem text-right'>12/25</span>
                </li>

              </ul>
            </div>

            <div className='h-98 bg-zinc-900 p-8 rounded-2xl'>
              <h3 className='font-semibold pb-8'>Ultímas aulas</h3>

              <div>
                <ul>
                  <li className='pb-6'>
                    <a href="https://app.professorferretto.com.br/play/atualidades/atualidades-2023?aula=atu31"
                     className='flex flex-row w-full h-full'>
                      <div className='pr-5 relative'>
                        <div className='absolute z-10 flex items-center justify-center bg-regal-blue/70 inset-0 
                        w-36 rounded-xl'>
                          <p className='pr-3'>37:07</p>
                          <PlayCircle />
                        </div>
                        <Image src={Image1} width={120} height={160} className='w-36.3 object-cover rounded-xl grayscale' alt="Imagem-da-Aula" />
                      </div>
                    
                      <div>
                        <p className='text-sm text-regal-blue pb-1'>Atualidades</p>
                        <p className='font-bold'>Tragédia das Chuvas no Litoral Norte de SP - Parte &nbsp; 02</p>
                      </div>
                    </a>
                  </li>

                  <li className='pb-6'>
                    <a href="https://app.professorferretto.com.br/play/atualidades/atualidades-2023?aula=atu30" className='flex flex-row w-full h-full'>
                    <div className='pr-5 relative'>
                        <div className='absolute z-10 flex items-center justify-center bg-regal-blue/70 inset-0 
                        w-36 rounded-xl'>
                          <p className='pr-3'>37:07</p>
                          <PlayCircle />
                        </div>
                        <Image src={Image2} width={150} height={160} className='w-36.2 object-cover rounded-xl grayscale' alt="Imagem-da-Aula" />
                      </div>
                    
                      <div>
                        <p className='text-sm text-regal-blue pb-1'>Atualidades</p>
                        <p className='font-bold'>Tragédia das Chuvas no Litoral Norte de SP - Parte &nbsp; 01</p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="https://app.professorferretto.com.br/play/atualidades/atualidades-2023?aula=atu29" className='flex flex-row w-full h-full'>
                    <div className='pr-5 relative'>
                        <div className='absolute z-10 flex items-center justify-center bg-regal-blue/70 inset-0 
                        w-36 rounded-xl'>
                          <p className='pr-3'>37:07</p>
                          <PlayCircle />
                        </div>
                        <Image src={Image3} width={120} height={160} className='w-36.2 object-cover rounded-xl grayscale' alt="Imagem-da-Aula" />
                      </div>
                    
                      <div>
                        <p className='text-sm text-regal-blue pb-1'>Atualidades</p>
                        <p className='font-bold'>Crise Sanitária Yanomami e Garimpo Ilegal - &nbsp; Parte 02</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <footer>
            <div className='bg-zinc-700/50 w-full h-full p-7 rounded-3xl flex flex-col'>
              <div className='flex justify-between pb-5'>
                <span className='font-bold text-sm'>Notificações</span>
                <div className='flex items-center'>
                  <span className='text-regal-blue font-bold text-sm'>Ver todas</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="#0049ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>                
              </div>

              <div>

                <div className='w-full bg-zinc-800/50 p-5 flex flex-row rounded-xl relative mb-5'>
                  <Image src={ferrettoImage} width={50} height={1} alt="foto-do-ferretto" className='rounded-full w-9 h-9'/>

                  <div className='flex flex-col pl-5'>
                   <div className='text-xs text-zinc-200/90'>
                      <p>Professor Ferretto - 16/09/2022</p>
                    </div>
                    <div>
                      <p className='text-sm'>ATENÇÃO! MANUNTENÇÃO PROGRAMADA NA PLATAF...</p>
                    </div>                                      
                  </div>

                  <div className='absolute flex flex-row right-9 top-7 bg-emerald-400 rounded-lg items-center p-1 pl-3'>
                    <p className='text-xs font-bold text-zinc-900'>LIDA</p>
                    <Check className='h-4'/>
                  </div>                  
                </div>   
                
                <div className='w-full bg-zinc-800/50 p-5 flex flex-row rounded-xl relative mb-5'>
                  <Image src={ferrettoImage} width={50} height={1} alt="foto-do-ferretto" className='rounded-full w-9 h-9'/>

                  <div className='flex flex-col pl-5'>
                   <div className='text-xs text-zinc-200/90'>
                      <p>Professor Ferretto - 16/09/2022</p>
                    </div>
                    <div>
                      <p className='text-sm'>ATENÇÃO! MANUNTENÇÃO PROGRAMADA NA PLATAF...</p>
                    </div>                                      
                  </div>

                  <div className='absolute flex flex-row right-9 top-7 bg-emerald-400 rounded-lg items-center p-1 pl-3'>
                    <p className='text-xs font-bold text-zinc-900'>LIDA</p>
                    <Check className='h-4'/>
                  </div>                  
                </div> 

                <div className='w-full bg-zinc-800/50 p-5 flex flex-row rounded-xl relative'>
                  <Image src={ferrettoImage} width={50} height={1} alt="foto-do-ferretto" className='rounded-full w-9 h-9'/>

                  <div className='flex flex-col pl-5'>
                   <div className='text-xs text-zinc-200/90'>
                      <p>Professor Ferretto - 16/09/2022</p>
                    </div>
                    <div>
                      <p className='text-sm'>ATENÇÃO! MANUNTENÇÃO PROGRAMADA NA PLATAF...</p>
                    </div>                                      
                  </div>

                  <div className='absolute flex flex-row right-9 top-7 bg-emerald-400 rounded-lg items-center p-1 pl-3'>
                    <p className='text-xs font-bold text-zinc-900'>LIDA</p>
                    <Check className='h-4'/>
                  </div>                  
                </div>     

              </div>
            </div>
          </footer>
        </main>

        <aside className='w-96 h-full pr-8 pl-8'>

          <div className='h-full flex justify-center items-center flex-col'>
            <Image src={LogoAside} alt="Logo-T-Aside" width={100} height={50} className='rounded-full' />
            <h2 className='text-zinc-100 font-semibold text-lg pt-2 pb-1'>Tony</h2>
            <p className='text-xs text-zinc-400 mb-3'>tonytnportela@gmail.com</p>
            <button className='text-regal-blue bg-zinc-800 border-regal-blue border-2 px-6 pt-1.5 pb-1.5 rounded-3xl text-xs font-semibold'>Ver Perfil</button>
            <div className='w-full my-7 border-t border-zinc-200'></div>

            <div className='mb-5'>
              <div className='flex flex-row justify-between mb-1'>
               <span className='text-sm text-zinc-300'>Questões respondidas</span>
               <span className='text-xs text-zinc-300'>8591/17182</span>
              </div>

              <div className='h-1 rounded-full w-80 bg-slate-200'>
                <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'></div>                  
              </div>
            </div>

            <div className='mb-5'>
              <div className='flex flex-row justify-between mb-1'>
               <span className='text-sm text-zinc-300'>Questões respondidas</span>
               <span className='text-xs text-zinc-300'>8591/17182</span>
              </div>

              <div className='h-1 rounded-full w-80 bg-slate-200'>
                <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'></div>                  
              </div>
            </div>

            <div className='mb-5'>
              <div className='flex flex-row justify-between mb-1'>
               <span className='text-sm text-zinc-300'>Questões respondidas</span>
               <span className='text-xs text-zinc-300'>8591/17182</span>
              </div>

              <div className='h-1 rounded-full w-80 bg-slate-200'>
                <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'></div>                  
              </div>
            </div>

            <div className='mb-5'>
              <div className='flex flex-row justify-between mb-1'>
               <span className='text-sm text-zinc-300'>Questões respondidas</span>
               <span className='text-xs text-zinc-300'>8591/17182</span>
              </div>

              <div className='h-1 rounded-full w-80 bg-slate-200'>
                <div className='h-1 rounded-full w-1/2 bg-blue-700 animate-fade animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-normal animate-fill-forwards'></div>                  
              </div>
            </div>

            

          </div>
        </aside>
      </div>
    </main>
  );
}
