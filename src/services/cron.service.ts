import { ScheduledJob, SchedulerService } from '../dependencies/scheduler'
import { CronJob } from 'cron'

export class CronScheduler implements SchedulerService {
  schedule<T extends () => void>(cron: string, cb: T): ScheduledJob {
    return new CronJob(cron, cb)
  }
}
