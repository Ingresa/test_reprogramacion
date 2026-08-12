# Contactabilidad - Comisión Ingresa

Demo estática preparada para GitHub Pages.

## Publicación

1. Crea un repositorio, por ejemplo `contactabilidad-ingresa`.
2. Sube todo el contenido de esta carpeta.
3. Usa `main` como rama principal.
4. En GitHub ve a `Settings > Pages`.
5. En `Build and deployment`, selecciona `GitHub Actions`.

El workflow `.github/workflows/pages.yml` publicará automáticamente el sitio.

La URL será normalmente:

`https://TU_USUARIO.github.io/contactabilidad-ingresa/`

## Local

Puedes abrir `index.html` directamente o usar:

```bash
python -m http.server 8080
```

Esta es una demo visual: no persiste datos ni implementa autenticación real.
