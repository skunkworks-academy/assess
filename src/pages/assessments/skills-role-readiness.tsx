import type {ReactNode} from 'react';
import AssessmentDetail from '../../components/AssessmentDetail';
import {getAssessment} from '../../data/assessments';

export default function SkillsRoleReadiness(): ReactNode {
  return <AssessmentDetail product={getAssessment('skills-role-readiness')} />;
}
