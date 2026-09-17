import type {ReactNode} from 'react';
import AssessmentDetail from '../../components/AssessmentDetail';
import {getAssessment} from '../../data/assessments';

export default function TeamCapabilityReview(): ReactNode {
  return <AssessmentDetail product={getAssessment('team-capability-review')} />;
}
