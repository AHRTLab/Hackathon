// The numeric contract, imported straight from protocol/limits.json (the bridge reads the same file).
import raw from '../../../protocol/limits.json';

export type Limits = typeof raw;
export const LIMITS: Limits = raw;
export const PROTOCOL_MAJOR = raw.protocol_version.split('.')[0];
