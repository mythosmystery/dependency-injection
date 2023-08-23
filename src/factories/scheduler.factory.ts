import { SchedulerService } from '../dependencies/scheduler'
import { CronScheduler } from '../services/cron.service'

export const schedulerFactory = (): SchedulerService => {
  return new CronScheduler()
}
