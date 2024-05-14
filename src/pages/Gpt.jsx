import { CallGPT } from 'api/gpt';
import { AppContainer, AppTitle } from 'components/CommonStyles/CommonStyles';
import DiaryDisplay from 'components/DiaryDisplay/DiaryDisplay';
import { UserInput } from 'components/UserInput/UserInput';
import { useDarkModeContext } from 'context/DarkModeContext';
import { useState } from 'react';
import { MdNightlightRound } from 'react-icons/md';
import { IoSunny } from 'react-icons/io5';
export default function Gpt() {
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // API 호출 함수
  const handleClickAPICall = async (userInput) => {
    try {
      setIsLoading(true);
      const message = await CallGPT({
        prompt: `${userInput}`,
      });
      const data = JSON.parse(message);
      setData(data);
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 로깅

  // 유저 입력 핸들링 함수
  const handleSubmit = (userInput) => {
    handleClickAPICall(userInput);
    console.log('userInput', userInput);
  };

  // UI 구성
  return (
    <AppContainer>
      {/* 어두운 모드 토글 버튼 */}
      <AppTitle>
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={toggleDarkMode}
            style={{
              backgroundColor: 'transparent',
              color: 'var(--color-fire)',
              fontSize: '1.8rem',
              cursor: 'pointer',
              transition: `all 150ms ease-in-out`,
              paddingRight: '1rem',
            }}
          >
            {darkMode ? <MdNightlightRound /> : <IoSunny />}
          </button>
          너의 친구 GPT
        </div>
      </AppTitle>
      {/* 사용자 입력 컴포넌트 */}
      <UserInput isLoading={isLoading} onSubmit={handleSubmit} />
      {/* 일기 결과 표시 컴포넌트 */}
      <DiaryDisplay data={data} isLoading={isLoading} />{' '}
      {/* isLoaing 오타 수정 */}
    </AppContainer>
  );
}
