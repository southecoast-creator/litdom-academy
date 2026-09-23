package com.example.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable

private val LitdomDarkColorScheme = darkColorScheme(
    primary = GoldPrimary,
    onPrimary = Obsidian,
    secondary = Champagne,
    onSecondary = Obsidian,
    tertiary = Champagne,
    background = Obsidian,
    onBackground = Ivory,
    surface = Charcoal,
    onSurface = Ivory,
    surfaceVariant = CharcoalLight,
    onSurfaceVariant = MutedText
)

@Composable
fun MyApplicationTheme(
    content: @Composable () -> Unit
) {
    MaterialTheme(
        colorScheme = LitdomDarkColorScheme,
        typography = Typography,
        content = content
    )
}
