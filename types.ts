
export enum InitiativeType {
  PARENT = 'PARENT',
  HER_AWARENESS = 'HER_AWARENESS',
  MEN_FORWARD = 'MEN_FORWARD'
}

export interface NavLink {
  label: string;
  path: string;
}

export interface ImpactMetric {
  value: string;
  label: string;
  description: string;
}

export interface Program {
  title: string;
  description: string;
  initiative: InitiativeType;
  image: string;
}
