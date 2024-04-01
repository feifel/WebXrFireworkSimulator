import Dexie, { type Table } from 'dexie';
import type {Sparkle} from '$lib/types/sparkle';

export class MyDb extends Dexie {

    public sparkle!: Table<Sparkle>;

    constructor() {
        super('MyDb.db');
        this.version(1).stores({
            sparkle: '&id, name, description, json',
        });
    }
}