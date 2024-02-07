
import Post from "@/components/Post";
import Upload from "@/components/Upload";



export default function Home() {

  return (
    <main className="">
      <Upload />
      <div className="-z-10 flex flex-col border-r lg:max-w-[50] ">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );



}
