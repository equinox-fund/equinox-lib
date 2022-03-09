/// <reference types="react" />
export interface ProjectBadgeProps {
    size?: 'small' | 'medium';
    color?: 'primary' | 'secondary' | 'success';
    className?: string;
}
declare const ProjectBadge: React.FC<ProjectBadgeProps>;
export default ProjectBadge;
