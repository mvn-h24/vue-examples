import { Cabinet, Feedback, ReceptionDate } from '..'

export interface Reception {
  id: number
  cabinet: Cabinet
  reception_date: ReceptionDate
  feedback: Feedback
  confirmation: string
}
