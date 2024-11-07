import dynamic from 'next/dynamic';

const HorizontalScroll = dynamic(() => import('@/modules/components/Home/index'), { ssr: false });

export default function Home() {

  return (
    <div>
      <main>
        <HorizontalScroll />
      </main>
    </div>
  );
}
