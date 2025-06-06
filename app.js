function calculateNamaank() {
    const name = document.getElementById("nameInput").value.trim().toUpperCase();
    const resultDiv = document.getElementById("result");
    if (!name) {
        resultDiv.innerText = "Please enter a name.";
        return;
    }

    const engMap = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 8, G: 3, H: 5, I: 1, J: 1,
        K: 2, L: 3, M: 4, N: 5, O: 7, P: 8, Q: 1, R: 2, S: 3, T: 4,
        U: 6, V: 6, W: 6, X: 5, Y: 1, Z: 7
    };

    let total = 0;
    for (let char of name) {
        if (engMap[char]) {
            total += engMap[char];
        }
    }

    let reduced = total;
    while (reduced > 100) {
        reduced = reduced.toString().split('').reduce((sum, num) => sum + parseInt(num), 0);
    }

    const resultMeaning = {
        1: ["Excellent – Highly Aligned", "Leadership, independence, and strong willpower."],
        2: ["Balanced – Generally Supportive", "Sensitivity, balance, and diplomacy."],
        3: ["Very Good – Favourably Aligned", "Creativity, joy, and expressive power."],
        4: ["Caution – Weakly Aligned", "Hard work and structure, but may feel limiting."],
        5: ["Excellent – Highly Aligned", "Freedom, adventure, and dynamic energy."],
        6: ["Excellent – Highly Aligned", "Harmony, care, and responsibility."],
        7: ["Balanced – Generally Supportive", "Spirituality, analysis, and inner wisdom."],
        8: ["Warning – Severely Misaligned", "Material ambition may overshadow balance."],
        9: ["Avoid – Energetically Unstable", "Emotional excess and instability."],
        10: ["Very Good – Favourably Aligned", "Confidence and charm drive success."],
        11: ["Caution – Weakly Aligned", "Intuitive but energetically fragile."],
        12: ["Balanced – Generally Supportive", "Creative and friendly, though scattered."],
        13: ["Caution – Weakly Aligned", "Potential for delays or stagnation."],
        14: ["Avoid – Energetically Unstable", "Inconsistent, may attract chaos."],
        15: ["Good – Moderately Aligned", "Charisma and leadership with heart."],
        16: ["Balanced – Generally Supportive", "Wisdom and introspection guide the path."],
        17: ["Avoid – Energetically Unstable", "Heavy karmic influences. Seek alignment."],
        18: ["Warning – Severely Misaligned", "Power struggles and ego clashes likely."],
        19: ["Good – Moderately Aligned", "Self-motivation with strong individuality."],
        20: ["Balanced – Generally Supportive", "Diplomatic and emotionally aware."],
        21: ["Very Good – Favourably Aligned", "Creative, optimistic, and communicative."],
        22: ["Warning – Severely Misaligned", "Unrealized potential creates frustration."],
        23: ["Very Good – Favourably Aligned", "Intelligent, dynamic, and well-connected."],
        24: ["Balanced – Generally Supportive", "Loyal and nurturing nature."],
        25: ["Balanced – Generally Supportive", "Wise, curious, and adaptable."],
        26: ["Caution – Weakly Aligned", "Practical but emotionally rigid."],
        27: ["Good – Moderately Aligned", "Spiritual seeker and artistic soul."],
        28: ["Caution – Weakly Aligned", "Assertive but lacks grounding."],
        29: ["Caution – Weakly Aligned", "Emotional turbulence may block clarity."],
        30: ["Balanced – Generally Supportive", "Joyful, friendly, and generous spirit."],
        31: ["Warning – Severely Misaligned", "Detached energy and inner conflict."],
        32: ["Good – Moderately Aligned", "Optimistic and socially gifted."],
        33: ["Very Good – Favourably Aligned", "Compassionate, nurturing, and wise."],
        34: ["Caution – Weakly Aligned", "Potential without expression creates blockage."],
        35: ["Warning – Severely Misaligned", "Imbalance in desire and delivery."],
        36: ["Balanced – Generally Supportive", "Creative harmony with emotional control."],
        37: ["Excellent – Highly Aligned", "Visionary energy, aligned with divine purpose."],
        38: ["Warning – Severely Misaligned", "Material focus creates spiritual disconnection."],
        39: ["Good – Moderately Aligned", "Caring achiever with visionary traits."],
        40: ["Warning – Severely Misaligned", "Restrictive energy. Lacks inspiration."],
        41: ["Balanced – Generally Supportive", "Reliable, focused, and structured."],
        42: ["Avoid – Energetically Unstable", "Conflicted emotions, weak decision-making."],
        43: ["Warning – Severely Misaligned", "Mental sharpness but emotional instability."],
        44: ["Critical – Not Recommended", "Heavy karmic burden and life resistance."],
        45: ["Balanced – Generally Supportive", "Resourceful and business-savvy."],
        46: ["Balanced – Generally Supportive", "Idealist with strength and order."],
        47: ["Warning – Severely Misaligned", "Detached, ungrounded spiritual energy."],
        48: ["Caution – Weakly Aligned", "Functional but emotionally dry."],
        49: ["Warning – Severely Misaligned", "Restless, lacking purpose."],
        50: ["Good – Moderately Aligned", "Productive and expressive personality."],
        51: ["Balanced – Generally Supportive", "Harmonious and cheerful outlook."],
        52: ["Warning – Severely Misaligned", "Prone to inner conflict."],
        53: ["Balanced – Generally Supportive", "Social charm and wit."],
        54: ["Avoid – Energetically Unstable", "Disruptive emotional patterns."],
        55: ["Balanced – Generally Supportive", "Independent, free-spirited thinker."],
        56: ["Avoid – Energetically Unstable", "Lacks stability, unpredictable mindset."],
        57: ["Good – Moderately Aligned", "Sensitive yet brave."],
        58: ["Balanced – Generally Supportive", "Smart and empathetic presence."],
        59: ["Balanced – Generally Supportive", "Idealistic and kind-hearted."],
        60: ["Balanced – Generally Supportive", "Stable and family-oriented."],
        61: ["Avoid – Energetically Unstable", "Imbalanced in thought and spirit."],
        62: ["Balanced – Generally Supportive", "Gentle, soft, and nurturing."],
        63: ["Avoid – Energetically Unstable", "Lack of direction and clarity."],
        64: ["Caution – Weakly Aligned", "Energetic mismatch and suppression."],
        65: ["Balanced – Generally Supportive", "Supportive and balanced influence."],
        66: ["Good – Moderately Aligned", "Protective and service-oriented."],
        67: ["Balanced – Generally Supportive", "Practical and wise."],
        68: ["Caution – Weakly Aligned", "Heavy-hearted and emotionally reactive."],
        69: ["Very Good – Favourably Aligned", "Romantic and artistically gifted."],
        70: ["Balanced – Generally Supportive", "Focused and disciplined."],
        71: ["Avoid – Energetically Unstable", "Lacks clarity and patience."],
        72: ["Avoid – Energetically Unstable", "Imbalance in goals and desires."],
        73: ["Excellent – Highly Aligned", "Creative visionary with purpose."],
        74: ["Avoid – Energetically Unstable", "Tense and overly restrictive."],
        75: ["Caution – Weakly Aligned", "Too rigid to flow freely."],
        76: ["Avoid – Energetically Unstable", "Struggles with self-acceptance."],
        77: ["Avoid – Energetically Unstable", "Overly detached and cold."],
        78: ["Avoid – Energetically Unstable", "Heavy, resistant energies."],
        79: ["Balanced – Generally Supportive", "Calm, composed, and creative."],
        80: ["Warning – Severely Misaligned", "Energetic volatility. Avoid excess."],
        81: ["Avoid – Energetically Unstable", "Ambition without support leads to failure."],
        82: ["Caution – Weakly Aligned", "Undirected emotional force."],
        83: ["Balanced – Generally Supportive", "Socially magnetic and vibrant."],
        84: ["Balanced – Generally Supportive", "Grounded and supportive."],
        85: ["Warning – Severely Misaligned", "Too scattered, needs focus."],
        86: ["Avoid – Energetically Unstable", "Burdened by emotional wounds."],
        87: ["Balanced – Generally Supportive", "Optimistic and caring."],
        88: ["Caution – Weakly Aligned", "Stressed by karmic energy."],
        89: ["Warning – Severely Misaligned", "Confusion between ego and purpose."],
        90: ["Balanced – Generally Supportive", "Grounded with a strong moral base."],
        91: ["Very Good – Favourably Aligned", "Strong-willed and spiritually guided."],
        92: ["Warning – Severely Misaligned", "Inner conflict creates stagnation."],
        93: ["Very Good – Favourably Aligned", "Optimistic and compassionate."],
        94: ["Caution – Weakly Aligned", "Detached and emotionally closed."],
        95: ["Balanced – Generally Supportive", "Kind, supportive, and emotionally aware."],
        96: ["Good – Moderately Aligned", "Reliable and loving energy."],
        97: ["Caution – Weakly Aligned", "Needs focus and emotional clarity."],
        98: ["Warning – Severely Misaligned", "Unstable with potential loss."],
        99: ["Avoid – Energetically Unstable", "Sacrifice-driven and heavy-hearted."],
        100: ["Very Good – Favourably Aligned", "Wholesome, complete, and harmonious."]
    };

    const [tag, insight] = resultMeaning[reduced] || ["Undefined", "This number is not yet classified. Consult a numerologist."];

    resultDiv.innerHTML = `
        <div class="result-box">
            <h3>🔍 NAMAANKK Analysis Report</h3>
            <strong>Name:</strong> ${name}<br>
            <strong>Numerological Value:</strong> ${total}<br>
            <strong>Result:</strong> ${tag}<br>
            <p><strong>Insight:</strong> ${insight}</p>
        </div>
    `;
}
