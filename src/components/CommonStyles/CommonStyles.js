import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  color: var(--color-text);
`;

export const AppTitle = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 35px;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 20px;
  margin: 10px;
`;
export const ResultTitle = styled.div`
  text-align: center;
  font-size: 35px;
`;
export const Divider = styled.div`
  margin-top: 20px;
`;
export const DiaryContainer = styled.div`
  color: var(--color-text);
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 1200px;
`;
export const CardContainer = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 20px;
  border-radius: 2px;
  margin: 10px 0px;
  overflow: auto;
  background-color: rgba(255, 255, 255, 0.1);
`;
export const CardTitle = styled.div`
  margin: 6px;
  font-size: 22px;
  margin-bottom: 10px;
  color: var(--text-color);
  display: flex;
  align-items: center;
`;
export const CardContent = styled.div`
  padding: 0px 10px 0 10px;
`;
export const ActionList = styled.ol`
  padding-left: 15px;
  font-size: 22px;
`;
export const ActionListItem = styled.li`
  margin-bottom: 5px;
`;
