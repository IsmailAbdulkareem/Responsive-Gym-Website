export type ActionType =
  | 'SHOW_LEAD_FORM'
  | 'SHOW_MAP'
  | 'SHOW_CONTACT'
  | 'SHOW_TRIAL'
  | null;

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  action?: ActionType;
  timestamp: Date;
}

export interface QuickAction {
  label: string;
  icon: string;
  message: string;
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  email?: string;
  interestedIn: string;
  bestTimeToCall: string;
  questions?: string;
}

export interface TrialFormData {
  fullName: string;
  phone: string;
}

export interface Lead extends LeadFormData {
  type: 'MEMBERSHIP_INQUIRY' | 'FREE_TRIAL';
  timestamp: string;
  source: string;
}

export interface ChatResponse {
  message: string;
  action: ActionType;
}

export interface SendLeadRequest {
  lead: Lead;
}

export interface SendLeadResponse {
  success: boolean;
  message?: string;
  error?: string;
}
