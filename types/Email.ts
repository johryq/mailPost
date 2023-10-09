export interface Email{
  mailTitle: string 
  sendTo: string
  sendTime: Date | string
  receiver: string
  text: string
}
export type EmailRef = Ref<Email>;