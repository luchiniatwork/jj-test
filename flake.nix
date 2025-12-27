{
  description = "jj-test development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            bun
            opencode
            jujutsu
          ];

          shellHook = ''
            export PS1="\[\033[0;31m\]\u@\h:\w\$\[\033[0m\] "
          '';
        };
      }
    );
}
