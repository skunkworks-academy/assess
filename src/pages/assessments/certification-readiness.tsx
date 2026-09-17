import type {ReactNode} from 'react';
import AssessmentDetail from '../../components/AssessmentDetail';
import {getAssessment} from '../../data/assessments';

export default function CertificationReadiness(): ReactNode {
  return <AssessmentDetail product={getAssessment('certification-readiness')} />;
}
