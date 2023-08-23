export interface SchedulerService {
  schedule<T extends () => void>(cron: string, cb: T): ScheduledJob
}

export interface ScheduledJob {
  start(): void
  stop(): void
}
