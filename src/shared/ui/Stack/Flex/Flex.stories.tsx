import type { Meta, StoryObj } from "@storybook/react"
import Flex from "./Flex"

const meta: Meta<typeof Flex> = {
    title: "shared/ui/Flex",
    component: Flex,
}
type Story = StoryObj<typeof Flex>

export const Row: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
}

export const Column: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
        direction: "column",
    },
}

export const RowGap4: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
        direction: "row",
        gap: "4",
    },
}

export const RowGap8: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
        direction: "row",
        gap: "8",
    },
}
export const RowGap16: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
        direction: "row",
        gap: "16",
    },
}
export const RowGap32: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
        direction: "row",
        gap: "32",
    },
}

export const ColumnGap16: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
        direction: "column",
        gap: "16",
    },
}

export const ColumnAlignCenter: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
        direction: "column",
        align: "center",
    },
}

export const ColumnAlignEnd: Story = {
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
        direction: "column",
        align: "end",
    },
}
export default meta
