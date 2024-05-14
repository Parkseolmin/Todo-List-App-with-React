import useBlocks from 'hook/useBlock';
import { useEffect } from 'react';

export default function Background() {
  const { blockContainerRef, createBlocks } = useBlocks();

  useEffect(() => {
    createBlocks();
  }, [createBlocks]);
  return (
    <section className='blocks-container'>
      <div ref={blockContainerRef} id='blocks'></div>
    </section>
  );
}
