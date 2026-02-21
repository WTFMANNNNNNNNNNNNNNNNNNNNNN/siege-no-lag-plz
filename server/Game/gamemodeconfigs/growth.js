module.exports = {
    level_cap: 10000,
    growth: true,
    defineLevelSkillPoints: level => {
        if (level <= 40) return 1;
        if (level <= 45 && (level & 1) == 1) return 1;
        if (level <= 51 && (level % 2) == 1) return 1;
        if (level % 18 == 1) return 1;
        return 0;
    },
};
