import type {ReactNode} from 'react';
import AssessmentDetail from '../../components/AssessmentDetail';
import {getAssessment} from '../../data/assessments';

export default function IndividualDevelopmentRoadmap(): ReactNode {
  return <AssessmentDetail product={getAssessment('individual-development-roadmap')} />;
}
