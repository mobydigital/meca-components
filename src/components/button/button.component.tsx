// Core
import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'moby-button',
    styleUrl: 'button.component.scss',
})

export class Button {

    /**
     * Props
     * 
     * @prop {string} title
     * @prop {string} classes
     * @prop {boolean} loader
     */
    @Prop() title: string;
    @Prop() classes: string;
    @Prop({ mutable: true }) loader: boolean;

    // =======================================================
    // @ Lifecycle hooks
    // =======================================================

    /**
     * Component did load
     * 
     * @returns {void}
     */
    componentDidLoad(): void {
        // If the type isn't provided, set 'default' by default
        if (!this.classes) {
            this.classes = "default";
        }
    }

    // =======================================================
    // @ Render
    // =======================================================

    render() {
        return (
            <button class={`button-base ${this.classes}`} disabled={this.loader}>
                { this.loader
                    ? <div class="loader">
                        <svg viewBox="0 0 32 32">
                            {/* TODO: El stroke del loader esta puesto en duro pero se podría usar una variable, o manejarlo con la clase del botón. */}
                            <circle class="spinner" cx="16" cy="16" r="14" fill="none" stroke="red"></circle>
                        </svg>
                    </div>
                    : null
                }
                {this.title}
            </button>
        );
    }
}
