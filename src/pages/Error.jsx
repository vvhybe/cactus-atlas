import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);

    // refresh the page
    const refresh = () =>{
        window.location.reload()
    }

    return (
    <section className='min-h-screen md:px-8 flex flex-col px-4 py-6 container mx-auto'>
        <NavBar/>
        <div className='py-8 flex flex-1 flex-col items-center justify-center'>
            <div className="flex justify-center items-center flex-col gap-2 py-6">
              {/* <PlantIcon width={140} height={140} /> */}
              {/* <img src={frames[frame]} className='relative h-[140px] w-[140px] object-cover object-center aspect-square mix-blend-darken hue-rotate-[-90deg] saturate-[.5] grayscale-[10%] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-green-700 before:z-20' alt=""/> */}
              <h1 className='sm:text-6xl text-4xl uppercase font-semibold text-green text-center'>Something went wrong please try agin</h1>
            </div>
            <button onClick={refresh} className="bg-green text-white py-4 px-8 rounded-lg my-6 text-xl font-medium uppercase">try agin</button>
        </div>
    </section>
    )
  }
  