import { describe, expect, it } from 'bun:test'
import { app } from './index'

describe('should work', () => {
    it('mock', () => {
        expect(1).toBe(1)
    })

    it('api response', async () => {
        const resp = await app.handle(new Request('http://localhost:3000/new-handler/shrad'))
            .then(res => res.text())

        expect(resp).toBe('Hello shrad')
    })
})

