class Queue {
    constructor() {
        this.jobs = {
            pdf: {
                queue: [],
                totalProcessedTime: 0,
                processTime: 5000
            },
            html: {
                queue: [],
                totalProcessedTime: 0,
                processTime: 1000
            }
        };

        this.isProcessing = false;
    }

    addJob(job) {
        const jobType = job.type.toLowerCase();
        if (!this.jobs[jobType]) {
            //Not supported type, file won't be processed
            return;
        }

        this.jobs[jobType].queue.push({name: job.name});
        this.run();
    }

    getJobContainer() {
        return Object.keys(this.jobs).reduce((current, next) => {
            if (!current || (this.jobs[next].queue.length && this.jobs[next].totalProcessedTime < current.totalProcessedTime)) {
                current = this.jobs[next];
            }

            return current;
        }, null);
    }

    resetProcessedJobs() {
        Object.keys(this.jobs).forEach((job => this.jobs[job].processed = 0));
    }

    areQueuesEmpty() {
        return Object.keys(this.jobs).every(job => !this.jobs[job].queue.length);
    }

    run() {
        if (this.isProcessing) {
            return;
        }

        if (this.areQueuesEmpty()) {
            this.isProcessing = false;
            this.resetProcessedJobs();
            return;
        }

        this.isProcessing = true;
        this.process(this.getJobContainer());
    }

    process(jobContainer) {
        const job = jobContainer.queue.shift();
        jobContainer.totalProcessedTime += jobContainer.processTime;

        setTimeout(() => {
            console.log(`File '${job.name}' processed!`);
            this.isProcessing = false;
            this.run();
        }, jobContainer.processTime);
    }
}

module.exports = new Queue();