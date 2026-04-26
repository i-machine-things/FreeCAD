> [!IMPORTANT]
> Monthly DEV snapshot — bleeding-edge build for testing bug fixes, regressions, and recently implemented features. **Do not use in a production environment.**

### Artifacts

| Platform | File | Notes |
|---|---|---|
| **Windows** | `FreeCAD_v*-installer.exe` | NSIS installer — recommended |
| **Windows** | `FreeCAD_v*.7z` | Portable archive — extract and run |
| **Debian / Ubuntu** | `freecad_v*-amd64.deb` | Install with `sudo dpkg -i freecad_*.deb` |
| **Source** | `freecad_source_v*.tar.gz` | Full source archive with submodules |

### How to install

**Windows**
Run the `*-installer.exe` or extract the `.7z` archive and launch `FreeCAD.exe`.

**Debian / Ubuntu**
```bash
sudo dpkg -i freecad_v*-amd64.deb
# Resolve any missing dependencies:
sudo apt-get install -f
```

### Version scheme
Tags follow `v<major>.<minor>.<patch>-DEV-<YYYYMMDD>`, e.g. `v1.2.0-DEV-20260501`.
The `.deb` package version uses the Debian pre-release convention `~` so it sorts before the eventual stable release.
