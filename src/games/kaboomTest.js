//import './style.css';
import kaboom from '../../node_modules/kaboom/dist/kaboom' //full path required - https://github.com/replit/kaboom/issues/75
//assets
//import playerSpriteImgUrl from './assets/player-sprite.png'
//import groundSpriteUrl from './assets/ground-sprite-2.png'

export default function kaboomTest(el) {

    const k = kaboom({
        root: el
        //fullscreen: true
    })

    k.scene('main', () => {
        const player = k.add([
            k.rect(50, 50),
            k.color(0, 1, 1),
            k.pos(20, 200),
            'player',
            //k.body(),
            {
                speed: 200,
                idleFrameID: 18
            }
        ])

        console.log('kaboom obj :: ', player)
    })

    k.start('main')
}