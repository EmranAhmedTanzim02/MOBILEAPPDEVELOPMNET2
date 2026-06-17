import { ScrollView, Pressable, Text, StyleSheet } from "react-native";

// List of department filter options shown as pills
const DEPARTMENTS = ["All", "Computer Science", "Software Engineering"];

type DepartmentFilterProps = {
    selected: string;
    onSelect: (value: string) => void;
};

export default function DepartmentFilter({ selected, onSelect }: DepartmentFilterProps) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            {DEPARTMENTS.map((dept) => {
                const isActive = dept === selected;
                return (
                    <Pressable
                        key={dept}
                        onPress={() => onSelect(dept)}
                        style={[styles.chip, isActive && styles.chipActive]}
                    >
                        <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
                            {dept}
                        </Text>
                    </Pressable>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
    },
    content: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        gap: 8,
    },
    chip: {
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 16,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#E2E8F0",
    },
    chipActive: {
        backgroundColor: "#DCEAFE",
        borderColor: "#DCEAFE",
    },
    chipText: {
        fontSize: 13,
        color: "#475569",
    },
    chipTextActive: {
        color: "#2563EB",
        fontWeight: "600",
    },
});