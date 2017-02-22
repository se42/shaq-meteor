import winston from 'winston';

export let logger = new winston.Logger();

logger.add(winston.transports.Console, {
    colorize: true,
    timestamp: true,
    level: 'silly',
})
