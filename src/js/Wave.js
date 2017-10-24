export default class Wave {
    constructor(opt = {}) {
        //
        this.enemyInitCnt = opt.enemyInitCnt || {
            a: 10,
            b: 5,
            c: 10
        };

        this.enemyCnt = {};
        Object.keys(this.enemyInitCnt).forEach(key => {
            this.enemyCnt[key] = this.enemyInitCnt[key];
        });

        this.enemyCfg = {
            a: {
                radius: 10,
                speed: 2,
                color: '#FFDDA0',
                health: 20,
            },
            b: {
                radius: 8,
                speed: 3,
                color: '#0280B2',
                health: 16,
            },
            c: {
                radius: 6,
                speed: 4,
                color: '#FFD387',
                health: 12
            }
        };
    }

    waveFinish() {
        const keys = Object.keys(this.enemyCnt);
        return keys.every(key => {
            return this.enemyCnt[key] <= 0;
        });
    }

    generateEnemy() {
        if (this.waveFinish()) {
            return -1;
        } else {
            const keys = Object.keys(this.enemyCnt);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                if (this.enemyCnt[key] > 0) {
                    this.enemyCnt[key]--;
                    return this.enemyCfg[key];
                }
            }
        }
    }
}
