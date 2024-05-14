import { useRef, useCallback, useState, useEffect } from 'react';

export default function useBlocks() {
  const blockContainerRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    numCols: 0,
    numRows: 0,
    numBlocks: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      const blockSize = 20;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const numCols = Math.ceil(screenWidth / blockSize);
      const numRows = Math.ceil(screenHeight / blockSize);
      const numBlocks = numCols * numRows;
      setDimensions({ numCols, numRows, numBlocks });
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const highlightRandomNeighbors = useCallback(
    (index) => {
      const { numCols, numRows, numBlocks } = dimensions;
      const neighbors = [
        index - 1,
        index + 1,
        index - numCols,
        index + numCols,
        index - numCols - 1,
        index - numCols + 1,
        index + numCols - 1,
        index + numCols + 1,
      ].filter(
        (i) =>
          i >= 0 &&
          i < numBlocks &&
          Math.abs((i % numCols) - (index % numCols)) <= 1
      );

      if (blockContainerRef.current) {
        const block = blockContainerRef.current.children[index];
        block.classList.add('highlight');
        setTimeout(() => {
          block.classList.remove('highlight');
        }, 500);

        const randomNeighborIndex =
          neighbors[Math.floor(Math.random() * neighbors.length)];
        const neighbor =
          blockContainerRef.current.children[randomNeighborIndex];
        if (neighbor) {
          neighbor.classList.add('highlight');
          setTimeout(() => {
            neighbor.classList.remove('highlight');
          }, 500);
        }
      }
    },
    [dimensions]
  );

  const createBlocks = useCallback(() => {
    const blockContainer = blockContainerRef.current;
    const { numBlocks } = dimensions;
    blockContainer.innerHTML = ''; // 기존 블록 제거
    for (let i = 0; i < numBlocks; i++) {
      const block = document.createElement('div');
      block.classList.add('block');
      block.dataset.index = i;
      blockContainer.appendChild(block);
    }
  }, [dimensions]);

  // 이벤트 위임을 사용하여 blockContainer에 대한 단일 이벤트 리스너 설정
  useEffect(() => {
    const blockContainer = blockContainerRef.current;
    const handleMouseMove = (event) => {
      const block = event.target;
      if (block.classList.contains('block')) {
        const index = parseInt(block.dataset.index, 10);
        highlightRandomNeighbors(index);
      }
    };

    blockContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      blockContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, [highlightRandomNeighbors]);

  return { blockContainerRef, createBlocks };
}
