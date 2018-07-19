import {JointElements} from "../jointElements"
import {Shape} from "../Shape"
/**
 * SubProcess class
 */
export default class extends Shape {
    constructor(options, graph, paper) {
        super(graph, paper)
        this.options = {
            id: null,
            type: "task",
            bounds: {
                x: null,
                y: null
            }
        }
        this.config(options)
        this.configBounds({
            width: 120,
            height: 80
        })
    }

    /**
     * Render the SubProcess Based in options config
     */
    render() {
        this.shape = new JointElements.SubProcess();
        this.shape.position(this.options.bounds.x, this.options.bounds.y)
        this.shape.resize(this.options.bounds.width, this.options.bounds.height)
        this.shape.addTo(this.graph)
    }
}
