
// way of showing loader in server side rendering making a loading.tsx file and making a loader function as our page.tsx
// takes a lot of time to do async task

export default function Loader(){

    return (
        <div className="flex justify-center my-auto ">
            
            <h1 className="text-3xl">Loading....</h1>
        </div>
    )


}