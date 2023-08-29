import Navbar from '@/components/global/Navbar/Navbar';
import Form from '@/components/collaboration/Form/Form';
import Contacts from '@/components/collaboration/Contacts/Contacts';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-wrap items-start justify-around w-full h-full px-[170px] mt-[80px]">
        <Contacts />
        <Form />
      </div>
    </main>
  );
}
