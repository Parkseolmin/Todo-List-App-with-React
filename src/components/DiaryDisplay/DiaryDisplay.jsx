import React from 'react';
import {
  ActionList,
  ActionListItem,
  CardContainer,
  CardContent,
  CardTitle,
  DiaryContainer,
  Divider,
  ResultTitle,
} from '../CommonStyles/CommonStyles';

import {
  FcPortraitMode,
  FcTodoList,
  FcContacts,
  FcLikePlaceholder,
  FcNeutralDecision,
  FcGraduationCap,
} from 'react-icons/fc';
import Loading from 'components/Loading/Loading';

export default function DiaryDisplay({ data, isLoading }) {
  return (
    <DiaryContainer>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <ResultTitle>{data.title}</ResultTitle>
          <Divider />
          <CardContainer>
            <CardTitle>
              <FcPortraitMode style={{ marginRight: '6px' }} />
              친구야,
            </CardTitle>
            <CardContent>{data.appraisal}</CardContent>
          </CardContainer>
          <CardContainer>
            <CardTitle>
              <FcTodoList style={{ marginRight: '6px' }} />
              요약
            </CardTitle>
            <CardContent>{data.summary}</CardContent>
          </CardContainer>
          <CardContainer>
            <CardTitle>
              <FcContacts style={{ marginRight: '6px' }} />
              일기장
            </CardTitle>
            <CardContent>{data.emotional_content}</CardContent>
          </CardContainer>
          <CardContainer>
            <CardTitle>
              <FcLikePlaceholder style={{ marginRight: '6px' }} />
              내가 느낀 감정
            </CardTitle>
            <CardContent>{data.emotional_result}</CardContent>
          </CardContainer>
          <CardContainer>
            <CardTitle>
              <FcNeutralDecision style={{ marginRight: '6px' }} />
              심리 분석
            </CardTitle>
            <CardContent>{data.analysis}</CardContent>
          </CardContainer>

          <CardContainer>
            <CardTitle>
              <FcGraduationCap style={{ marginRight: '6px' }} />
              GPT 조언
            </CardTitle>
            <CardContent>
              <ActionList>
                {(data.action_list || []).map((action, index) => (
                  <ActionListItem key={index}>{action}</ActionListItem>
                ))}
              </ActionList>
            </CardContent>
          </CardContainer>
        </>
      )}
    </DiaryContainer>
  );
}
